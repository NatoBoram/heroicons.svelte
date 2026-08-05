<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import QuestionMarkCircleSvelte from '../../../lib/20/solid/question-mark-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: QuestionMarkCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="QuestionMarkCircle" />
