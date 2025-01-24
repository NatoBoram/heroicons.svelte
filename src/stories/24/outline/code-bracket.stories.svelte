<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CodeBracketSvelte from '../../../lib/24/outline/code-bracket.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CodeBracketSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CodeBracket" />
