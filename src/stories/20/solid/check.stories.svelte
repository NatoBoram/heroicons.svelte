<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CheckSvelte from '../../../lib/20/solid/check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CheckSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Check" />
