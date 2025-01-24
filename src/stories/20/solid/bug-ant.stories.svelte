<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BugAntSvelte from '../../../lib/20/solid/bug-ant.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BugAntSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="BugAnt" />
