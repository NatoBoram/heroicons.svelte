<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CodeBracketSquareSvelte from '../../../lib/24/solid/code-bracket-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CodeBracketSquareSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CodeBracketSquare" />
