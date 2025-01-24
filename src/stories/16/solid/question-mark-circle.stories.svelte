<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import QuestionMarkCircleSvelte from '../../../lib/16/solid/question-mark-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: QuestionMarkCircleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="QuestionMarkCircle" />
