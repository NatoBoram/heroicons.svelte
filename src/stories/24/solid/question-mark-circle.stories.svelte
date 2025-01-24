<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import QuestionMarkCircleSvelte from '../../../lib/24/solid/question-mark-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: QuestionMarkCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="QuestionMarkCircle" />
