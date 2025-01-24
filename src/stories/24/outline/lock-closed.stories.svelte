<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LockClosedSvelte from '../../../lib/24/outline/lock-closed.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: LockClosedSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="LockClosed" />
