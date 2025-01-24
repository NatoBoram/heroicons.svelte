<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LockClosedSvelte from '../../../lib/20/solid/lock-closed.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: LockClosedSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="LockClosed" />
