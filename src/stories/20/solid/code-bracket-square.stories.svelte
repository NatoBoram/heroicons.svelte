<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CodeBracketSquareSvelte from '../../../lib/20/solid/code-bracket-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CodeBracketSquareSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="CodeBracketSquare" />
