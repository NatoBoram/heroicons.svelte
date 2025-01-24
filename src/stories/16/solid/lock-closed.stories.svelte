<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LockClosedSvelte from '../../../lib/16/solid/lock-closed.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: LockClosedSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="LockClosed" />
