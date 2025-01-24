<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CodeBracketSquareSvelte from '../../../lib/24/outline/code-bracket-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CodeBracketSquareSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CodeBracketSquare" />
