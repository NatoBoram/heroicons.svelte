<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CodeBracketSquareSvelte from '../../../lib/16/solid/code-bracket-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CodeBracketSquareSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CodeBracketSquare" />
